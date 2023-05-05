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
                        class="btn btn-warning" role="button">Wen Mint?!</a>
                </div>
                <div class="d-flex justify-content-end w-100">
                    <div class="marketplaces" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
                        <div title="Ordinals Wallet">
                            <a href="https://ordinalswallet.com/collection/ordinal-mb" target="_blank"><img
                                    src="https://ordinalswallet.com/logo-icon.svg" alt="ordinalswallet"></a>
                        </div>
                        <div title="Magic Eden">
                            <a href="https://magiceden.io/ordinals/marketplace/ordinalmb" target="_blank"><img
                                    src="https://pbs.twimg.com/profile_images/1608832132448948224/VZwAgvrL_400x400.jpg"
                                    alt="magiceden"></a>
                        </div>
                        <div title="OrdSwap">
                            <a href="https://ordswap.io/collections/monkey-business" target="_blank"><img
                                    src="https://ordswap.io/logo2.svg" alt="ordswap"></a>
                        </div>
                        <div title="Ordynals">
                            <a href="https://beta.ordynals.com/collection/ordinal-monkey-business" target="_blank"><img
                                    src="https://beta.ordynals.com/favicon.png" alt="ordynals"></a>
                        </div>
                        <div title="Ordinal Hub">
                            <a href="https://ordinalhub.com/collection/ordinal-mb" target="_blank"><img
                                    src="https://www.ordinalhub.com/manifest/favicon-196.png" alt="ordinalhub"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="inscriptions.find(item => item.number == 0)" class="d-flex justify-content-center" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="true">
                <div class="spinner-border text-light" style="width: 5rem; height: 5rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div v-else>
                <div id="collectionItems" class="row g-3" data-aos="fade-up" data-aos-easing="ease-in-out"
                    data-aos-duration="800" data-aos-once="true">
                    <div class="" v-for="insc in inscriptions" :key="insc.id">
                        <div :class="[{ unavailable: !insc.available }, 'item wrapper']"
                            :title="!insc.available ? `SOLD - ${insc.name}` : insc.name">
                            <div class="item-inner text-center">
                                <div class="item-thumb" style="margin-bottom:10px;" @mouseover="hover.id = insc.id"
                                    @mouseleave="hover.id = false">
                                    <a :href="insc.url" target="_blank">
                                        <img class="img-pixel" :src="insc.contentUrl">
                                        <img v-if="hover.id == insc.id && !insc.available" class="img-sold"
                                            src="/images/sold.png">
                                    </a>
                                </div>
                                <div class="item-number">
                                    <h6><a :href="insc.url" target="_blank">{{ insc.number }}</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Filter></Filter>
</template>

<script>
// import axios from 'axios'
import collection from '@/assets/ombInscriptions.json'
import Filter from '@/components/CollectionFilter.vue'
import _ from 'lodash'
export default {
    data() {
        return {
            hover: { id: -1 }
        }
    },
    components: {
        Filter,
    },
    computed: {
        inscriptions: {
            get() {
                // let numbers = _.orderBy(this.allInscriptions, 'name', 'asc')
                // console.log(this.allInscriptions.map(item => item.number).toString())
                return this.$store.state.inscriptions
            },
            set(value) {
                this.$store.commit('setInscriptions', value)
            }
        }
    },
    methods: {
        loadInscriptions() {
            let soldIds = ['609ef3f1a4d764cc272669a28ae91d2b4ca3526f8275bd2296d5006c3cd8be75i0', 'c3eee7dcc01ef23ca3772348900936cd5de5c62219e806091735eb8a9dc4b3b8i0', '1241b0866306cfeeed14a40b113eb7d81db9fa9b6eb361ed8d8d35daf629093di0', 'a3bdc4b7f3d9a9676b3e4f467565d0f0b74582ac2f0502d99fae1967caa92249i0', 'c0701173d7742fb2cf874339b710c3b0f5d3108596b4461c1c8aa66f4ec7df73i0', 'ddd7842f2772a9f02ebddabbf582bd57bc39d76ebff9b14f6add4ab15319e8f5i0', 'bf1fc6d290e84577a40abfe9e39462dfdfcca0c96a218fff02f06a29874581cbi0', 'd71a0696a03c40e71008930236be33bc588779688c33c9f2797c242a4e00c1dai0', '080e2e5c4f98f08bc567c137f8f2f1df28ce59d85e8085016f17d351f410bfc5i0', '393d8afac999488ce50ade493d16ee29c1dae6642dd21a8bda1f9d5956c1d526i0', 'd6ae3e4a4369b7c2a2de1e28c905ca0dc3e8e7bca148f9806b84be0a4b17f3c1i0', 'bf4f602c3bdd4cb2faf3ebeb17a914fa955696255aa793ba08f0e5e6c26ab945i0', '40b9574be3843b8b177c83600419500961207798eb84ce06ea6743387f8f7fbci0', '8c662930bd945f5a306e7a88fea7920e0bb016c956e176556deb82e6bcf9cee6i0', '10348023b0568c267100906b8ac23271507c0b9fc0b073b7f43f1b8eed077b9fi0', 'e72c6b195d241eb3e5f68c915fdddb0fb63069748390df3bee4920bdacf3273fi0', 'a6d26173bf0a20b1f3ef1876eabc2c5976455c9bc88ef83e7b2b27dc235983c4i0', '0f1421b350e9c96c1704b1060838dc48661e9a680b15ce43051bdfe30bb58c63i0', 'ec369687d79af3c87427d232445eb7c7e3af592c9adc59c13de09fb18ee2bf6ci0', '8823c77371b3a07da167878d4d50f400f3567333a530827105cccfa8b08b7e8fi0', 'f6ac0e9e22337987cd83dc15b9a4aea04844b45d05fcbe9e0355a171a7577f58i0', 'bd2386ee79301dff14af1d758de86ad44417f22236ef28889c6b2af486bdcafai0', '4465f94440edf6b616c504d31043c1b095b1b4857e71b944691ba34a40a0dea6i0', 'a3b40017af0a26e820bd7b5a6d9ea01e50d56915b76572ba2cb68bce531ea0a7i0', 'd0d4b71e1f1c2f8d162eb3c77cd505a58f74f9633a0e2258b77c1e3eba97eaaai0', '3544a6873c413603eb75b3c1c57474297281397ff4f2cc824c2ebcd79dffab24i0', 'ca1bde7d195a95a84c00d75e45abb78be4d340ea14ff8093df796a4cdaa1005ai0', 'cae52138cbd62ff06b16bfc96021889fa24b0b2fcc743d14677e53ea20a38a39i0', 'aec7e622509910bf4d71dc9c5eadd0169be5798b05be0a2b20c61298aa853d1fi0']
            let temp = collection.map(item => {
                return {
                    id: item.incription_id,
                    contentUrl: `https://ordinals.com/content/${item.incription_id}`,
                    url: `https://ordinals.com/inscription/${item.incription_id}`,
                    name: item.name,
                    number: parseInt(item.number),
                    available: soldIds.indexOf(item.incription_id) < 0 ? true : false
                }
            });
            this.inscriptions = _.orderBy(temp, 'number', 'asc');
        },
    },
    async mounted() {
        this.loadInscriptions();
    },
};
</script>

<style>
#collectionItems {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
}

@media (min-width: 768px) {
    #collectionItems {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 1280px) {
    #collectionItems {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 10px;
    }
}

.item {
    background: #1a203c;
    border: 2px solid transparent;
    transition: all .3s ease;
}

.item.wrapper:hover {
    border: 5px solid;
    border-color: #fff;
}

.item.wrapper {
    display: inline-block;
    border-color: rgba(255, 255, 255, .2);
    background-color: #000;
}

.item a,
.item-number a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    position: relative;
}

img {
    border-style: none;
    max-width: 100%;
    height: auto;
}

.img-pixel {
    image-rendering: pixelated;
    height: auto;
    background-size: 100% 100%;
    position: relative;
}

.img-sold {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
}

.unavailable {
    opacity: 0.4;
}

.unavailable:hover {
    opacity: 1;
}

.marketplaces img {
    max-width: 42px;
}</style>